// Vercel Serverless Function (백엔드 대리인 역할)
// 이 파일은 반드시 프로젝트 폴더 내 'api' 폴더 안에 'chat.js'라는 이름으로 저장해야 합니다.

export default async function handler(req, res) {
    // 보안을 위해 POST 요청만 허용합니다.
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'POST 요청만 지원합니다.' });
    }

    try {
        // 1. 프론트엔드(index.html)에서 보낸 데이터(월령, 미완료 태스크, 사용자 질문)를 받습니다.
        const { message, month, pendingTasks } = req.body;
        
        // 2. Vercel 환경 변수에서 안전하게 API 키를 꺼냅니다. (브라우저에는 절대 노출되지 않음!)
        const apiKey = process.env.GEMINI_API_KEY;

        if (!apiKey) {
            return res.status(500).json({ error: '서버에 API 키가 설정되지 않았습니다.' });
        }

        // 3. AI에게 역할을 부여하는 프롬프트를 구성합니다.
        const systemInstruction = `당신은 20년 경력의 베테랑 소아과 전문의이자 따뜻한 육아 멘토입니다.
현재 아기 월령: ${month}.
(참고) 부모님이 아직 완료하지 못한 체크리스트 항목: ${pendingTasks.length > 0 ? pendingTasks.join(', ') : '모두 완료함'}.
부모의 불안감을 덜어주고, 전문적이면서도 실생활에 바로 적용할 수 있는 조언을 해주세요. 답변은 모바일에서 읽기 편하게 3~4문장으로 짧고 다정하게 해주세요.`;

        const payload = {
            contents: [{ parts: [{ text: message }] }],
            systemInstruction: { parts: [{ text: systemInstruction }] }
        };

        const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`;

        // 4. 구글 서버(Gemini)와 통신합니다.
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error?.message || '구글 API 호출 실패');
        }

        const data = await response.json();
        const reply = data.candidates?.[0]?.content?.parts?.[0]?.text || "죄송해요, 답변을 생성하지 못했어요.";

        // 5. 구글에서 받은 답변을 프론트엔드(브라우저)로 성공적으로 돌려보냅니다.
        return res.status(200).json({ reply });

    } catch (error) {
        console.error('백엔드 API 에러:', error);
        return res.status(500).json({ error: '서버 내부 통신 오류가 발생했습니다.' });
    }
}