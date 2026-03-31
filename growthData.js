/**
 * WHO Child Growth Standards LMS Parameters
 * Source: WHO Child Growth Standards (2006)
 * https://www.who.int/tools/child-growth-standards
 *
 * Used by the 2017 Korean National Growth Charts (질병관리청 2017 소아청소년 성장도표)
 * for children aged 0–35 months. The KNGC2017 adopts WHO standards verbatim for this age range.
 * Reference: Kim JH et al., Clin Exp Pediatr. 2018;61(5):135-149. PMC5976563
 *
 * LMS Parameters:
 *   L = Box-Cox power (lambda)
 *   M = Median (mu)
 *   S = Coefficient of variation (sigma)
 *
 * Z-score formula: Z = ((X/M)^L - 1) / (L * S)
 * Percentile: pnorm(Z) — use jStat or a numeric approximation
 *
 * Coverage: 0–24 months for length-for-age, 0–36 months for weight-for-age
 * (length-for-age WHO tables are published to 24 months; weight-for-age to 60 months)
 */

// ---------------------------------------------------------------------------
// Weight-for-Age LMS  (Month → [L, M, S])
// Data from: wfa_boys_0-to-5-years_zscores.xlsx / wfa_girls_0-to-5-years_zscores.xlsx
// ---------------------------------------------------------------------------

export const wfaBoysLMS = {
  //  month: [L,        M,       S      ]
  0:  [ 0.3487,  3.3464, 0.14602],
  1:  [ 0.2297,  4.4709, 0.13395],
  2:  [ 0.1970,  5.5675, 0.12385],
  3:  [ 0.1738,  6.3762, 0.11727],
  4:  [ 0.1553,  7.0023, 0.11316],
  5:  [ 0.1395,  7.5105, 0.11080],
  6:  [ 0.1257,  7.9340, 0.10958],
  7:  [ 0.1134,  8.2970, 0.10902],
  8:  [ 0.1021,  8.6151, 0.10882],
  9:  [ 0.0917,  8.9014, 0.10881],
  10: [ 0.0820,  9.1649, 0.10891],
  11: [ 0.0730,  9.4122, 0.10906],
  12: [ 0.0644,  9.6479, 0.10925],
  13: [ 0.0563,  9.8749, 0.10949],
  14: [ 0.0487, 10.0953, 0.10976],
  15: [ 0.0413, 10.3108, 0.11007],
  16: [ 0.0343, 10.5228, 0.11041],
  17: [ 0.0275, 10.7319, 0.11079],
  18: [ 0.0211, 10.9385, 0.11119],
  19: [ 0.0148, 11.1430, 0.11164],
  20: [ 0.0087, 11.3462, 0.11211],
  21: [ 0.0029, 11.5486, 0.11261],
  22: [-0.0028, 11.7504, 0.11314],
  23: [-0.0083, 11.9514, 0.11369],
  24: [-0.0137, 12.1515, 0.11426],
  25: [-0.0189, 12.3502, 0.11485],
  26: [-0.0240, 12.5466, 0.11544],
  27: [-0.0289, 12.7401, 0.11604],
  28: [-0.0337, 12.9303, 0.11664],
  29: [-0.0385, 13.1169, 0.11723],
  30: [-0.0431, 13.3000, 0.11781],
  31: [-0.0476, 13.4798, 0.11839],
  32: [-0.0520, 13.6567, 0.11896],
  33: [-0.0564, 13.8309, 0.11953],
  34: [-0.0606, 14.0031, 0.12008],
  35: [-0.0648, 14.1736, 0.12062],
  36: [-0.0689, 14.3429, 0.12116],
};

export const wfaGirlsLMS = {
  0:  [ 0.3809,  3.2322, 0.14171],
  1:  [ 0.1714,  4.1873, 0.13724],
  2:  [ 0.0962,  5.1282, 0.13000],
  3:  [ 0.0402,  5.8458, 0.12619],
  4:  [-0.0050,  6.4237, 0.12402],
  5:  [-0.0430,  6.8985, 0.12274],
  6:  [-0.0756,  7.2970, 0.12204],
  7:  [-0.1039,  7.6422, 0.12178],
  8:  [-0.1288,  7.9487, 0.12181],
  9:  [-0.1507,  8.2254, 0.12199],
  10: [-0.1700,  8.4800, 0.12223],
  11: [-0.1872,  8.7192, 0.12247],
  12: [-0.2024,  8.9481, 0.12268],
  13: [-0.2158,  9.1699, 0.12283],
  14: [-0.2278,  9.3870, 0.12294],
  15: [-0.2384,  9.6008, 0.12299],
  16: [-0.2478,  9.8124, 0.12303],
  17: [-0.2562, 10.0226, 0.12306],
  18: [-0.2637, 10.2315, 0.12309],
  19: [-0.2703, 10.4393, 0.12315],
  20: [-0.2762, 10.6464, 0.12323],
  21: [-0.2815, 10.8534, 0.12335],
  22: [-0.2862, 11.0608, 0.12350],
  23: [-0.2903, 11.2688, 0.12369],
  24: [-0.2941, 11.4775, 0.12390],
  25: [-0.2975, 11.6864, 0.12414],
  26: [-0.3005, 11.8947, 0.12441],
  27: [-0.3032, 12.1015, 0.12472],
  28: [-0.3057, 12.3059, 0.12506],
  29: [-0.3080, 12.5073, 0.12545],
  30: [-0.3101, 12.7055, 0.12587],
  31: [-0.3120, 12.9006, 0.12633],
  32: [-0.3138, 13.0930, 0.12683],
  33: [-0.3155, 13.2837, 0.12737],
  34: [-0.3171, 13.4731, 0.12794],
  35: [-0.3186, 13.6618, 0.12855],
  36: [-0.3201, 13.8503, 0.12919],
};

// ---------------------------------------------------------------------------
// Length-for-Age LMS  (Month → [L, M, S])
// Data from: lhfa_boys_0-to-2-years_zscores.xlsx / lhfa_girls_0-to-2-years_zscores.xlsx
// Coverage: 0–24 months
// ---------------------------------------------------------------------------

export const lfaBoysLMS = {
  //  month: [L,  M,       S      ]
  0:  [1, 49.8842, 0.03795],
  1:  [1, 54.7244, 0.03557],
  2:  [1, 58.4249, 0.03424],
  3:  [1, 61.4292, 0.03328],
  4:  [1, 63.8860, 0.03257],
  5:  [1, 65.9026, 0.03204],
  6:  [1, 67.6236, 0.03165],
  7:  [1, 69.1645, 0.03139],
  8:  [1, 70.5994, 0.03124],
  9:  [1, 71.9687, 0.03117],
  10: [1, 73.2812, 0.03118],
  11: [1, 74.5388, 0.03125],
  12: [1, 75.7488, 0.03137],
  13: [1, 76.9186, 0.03154],
  14: [1, 78.0497, 0.03174],
  15: [1, 79.1458, 0.03197],
  16: [1, 80.2113, 0.03222],
  17: [1, 81.2487, 0.03250],
  18: [1, 82.2587, 0.03279],
  19: [1, 83.2418, 0.03310],
  20: [1, 84.1996, 0.03342],
  21: [1, 85.1348, 0.03376],
  22: [1, 86.0477, 0.03410],
  23: [1, 86.9410, 0.03445],
  24: [1, 87.8161, 0.03479],
};

export const lfaGirlsLMS = {
  0:  [1, 49.1477, 0.03790],
  1:  [1, 53.6872, 0.03640],
  2:  [1, 57.0673, 0.03568],
  3:  [1, 59.8029, 0.03520],
  4:  [1, 62.0899, 0.03486],
  5:  [1, 64.0301, 0.03463],
  6:  [1, 65.7311, 0.03448],
  7:  [1, 67.2873, 0.03441],
  8:  [1, 68.7498, 0.03440],
  9:  [1, 70.1435, 0.03444],
  10: [1, 71.4818, 0.03452],
  11: [1, 72.7710, 0.03464],
  12: [1, 74.0150, 0.03479],
  13: [1, 75.2176, 0.03496],
  14: [1, 76.3817, 0.03514],
  15: [1, 77.5099, 0.03534],
  16: [1, 78.6055, 0.03555],
  17: [1, 79.6710, 0.03576],
  18: [1, 80.7079, 0.03598],
  19: [1, 81.7182, 0.03620],
  20: [1, 82.7036, 0.03643],
  21: [1, 83.6654, 0.03666],
  22: [1, 84.6040, 0.03688],
  23: [1, 85.5202, 0.03711],
  24: [1, 86.4153, 0.03734],
};

// ---------------------------------------------------------------------------
// Percentile Calculation
// ---------------------------------------------------------------------------

/**
 * Calculate Z-score using the LMS method (Cole & Green, 1992)
 * @param {number} x  - observed measurement (weight in kg, or length in cm)
 * @param {number} L  - Box-Cox power (lambda)
 * @param {number} M  - median (mu)
 * @param {number} S  - coefficient of variation (sigma)
 * @returns {number} z-score
 */
export function lmsZScore(x, L, M, S) {
  if (L === 0) {
    return Math.log(x / M) / S;
  }
  return (Math.pow(x / M, L) - 1) / (L * S);
}

/**
 * Convert Z-score to percentile using the standard normal CDF
 * Uses erf approximation (Abramowitz & Stegun 7.1.26, max error < 1.5e-7)
 * Key: CDF(z) = 0.5 * (1 + erf(z / sqrt(2)))
 * @param {number} z
 * @returns {number} percentile (0–100)
 */
export function zToPercentile(z) {
  // erf(x) approximation
  function erf(x) {
    const sign = x >= 0 ? 1 : -1;
    const ax = Math.abs(x);
    const t = 1.0 / (1.0 + 0.3275911 * ax);
    const poly = t * (0.254829592 + t * (-0.284496736 + t * (1.421413741 + t * (-1.453152027 + t * 1.061405429))));
    return sign * (1.0 - poly * Math.exp(-ax * ax));
  }
  return 0.5 * (1.0 + erf(z / Math.SQRT2)) * 100;
}

/**
 * Compute weight-for-age percentile
 * @param {number} weightKg  - weight in kg
 * @param {number} ageMonths - age in whole months (0–36)
 * @param {'male'|'female'} sex
 * @returns {{ z: number, percentile: number }|null}
 */
export function weightPercentile(weightKg, ageMonths, sex) {
  const month = Math.round(ageMonths);
  const table = sex === 'male' ? wfaBoysLMS : wfaGirlsLMS;
  const lms = table[month];
  if (!lms) return null;
  const [L, M, S] = lms;
  const z = lmsZScore(weightKg, L, M, S);
  return { z: parseFloat(z.toFixed(2)), percentile: parseFloat(zToPercentile(z).toFixed(1)) };
}

/**
 * Compute length-for-age percentile
 * @param {number} lengthCm  - length/height in cm
 * @param {number} ageMonths - age in whole months (0–24)
 * @param {'male'|'female'} sex
 * @returns {{ z: number, percentile: number }|null}
 */
export function lengthPercentile(lengthCm, ageMonths, sex) {
  const month = Math.round(ageMonths);
  const table = sex === 'male' ? lfaBoysLMS : lfaGirlsLMS;
  const lms = table[month];
  if (!lms) return null;
  const [L, M, S] = lms;
  const z = lmsZScore(lengthCm, L, M, S);
  return { z: parseFloat(z.toFixed(2)), percentile: parseFloat(zToPercentile(z).toFixed(1)) };
}

/**
 * Interpret a percentile value into a Korean clinical label
 * Based on KNGC2017 cutoff criteria (percentile-based)
 * @param {number} pct
 * @returns {string}
 */
export function interpretPercentile(pct) {
  if (pct < 3)   return '매우 낮음 (3백분위 미만 — 전문의 상담 권장)';
  if (pct < 10)  return '낮음 (3–10백분위)';
  if (pct < 25)  return '평균 이하 (10–25백분위)';
  if (pct < 75)  return '정상 (25–75백분위)';
  if (pct < 90)  return '평균 이상 (75–90백분위)';
  if (pct < 97)  return '높음 (90–97백분위)';
  return '매우 높음 (97백분위 초과 — 전문의 상담 권장)';
}

// ---------------------------------------------------------------------------
// Convenience: get median (50th percentile) value for a given age/sex
// ---------------------------------------------------------------------------

/**
 * Returns the median weight (kg) for a given age and sex
 */
export function medianWeight(ageMonths, sex) {
  const month = Math.round(ageMonths);
  const table = sex === 'male' ? wfaBoysLMS : wfaGirlsLMS;
  return table[month] ? table[month][1] : null;
}

/**
 * Returns the median length (cm) for a given age and sex
 */
export function medianLength(ageMonths, sex) {
  const month = Math.round(ageMonths);
  const table = sex === 'male' ? lfaBoysLMS : lfaGirlsLMS;
  return table[month] ? table[month][1] : null;
}
