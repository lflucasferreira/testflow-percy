/** Traceable test case IDs — map to Jira/Xray or test management tools */

const TC = {
  VISUAL_LOGIN: 'TC-9001',
  VISUAL_DASHBOARD: 'TC-9002',
  VISUAL_COMPONENTS: 'TC-9003',
  VISUAL_TEAM: 'TC-9004',
  VISUAL_SETTINGS: 'TC-9005',
  VISUAL_ACTIVITY: 'TC-9006',
  VISUAL_WIZARD: 'TC-9007',
  VISUAL_STATES: 'TC-9008',
}

/** Prefix a test title with a traceable case ID */
function tc(id, title) {
  return `[${id}] ${title}`
}

module.exports = { TC, tc }
