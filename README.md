# testflow-percy

Visual regression automation for [TestFlow](https://github.com/qaschoolbr/testflow) using **Cypress** + **Percy**.

Based on the Percy setup from [`testflow-cypress`](https://github.com/lflucasferreira/testflow-cypress), focused only on visual baselines.

[![CI](https://github.com/lflucasferreira/testflow-percy/actions/workflows/percy.yml/badge.svg)](https://github.com/lflucasferreira/testflow-percy/actions/workflows/percy.yml)

## Stack

| Tool | Purpose |
|------|---------|
| Cypress 15+ | Drive the browser and stabilize pages |
| @percy/cypress + @percy/cli | Capture and compare visual snapshots |
| @bahmutov/cy-grep | Tag filtering (`@visual`, `@regression`) |

## Snapshots

| ID | Page | Snapshot name |
|----|------|---------------|
| TC-9001 | Login | Login Page |
| TC-9002 | Dashboard | Dashboard |
| TC-9003 | Components | Components Page |
| TC-9004 | Team | Team Page |
| TC-9005 | Settings | Settings Page |
| TC-9006 | Activity | Activity Page |
| TC-9007 | Wizard | Wizard Page |
| TC-9008 | States | States Page |

## Prerequisites

- Node.js 20+
- TestFlow on port `5050`:

```bash
docker run -p 5050:5050 qaschool/testflow:latest
```

- Percy token (`PERCY_TOKEN`) to upload snapshots

## Setup

```bash
npm install
```

### Credentials

| Field | Default |
|-------|---------|
| Email | `demo@automation.io` |
| Password | `Demo123!` |

Override in CI/local:

```bash
export CYPRESS_DEMO_EMAIL=demo@automation.io
export CYPRESS_DEMO_PASSWORD=your-secret
```

## Running tests

```bash
# Interactive Cypress
npm run cy:open

# Visual specs only (no Percy upload)
npm run cy:run:visual

# Visual specs with Percy (requires PERCY_TOKEN)
export PERCY_TOKEN=your_percy_token
npm run cy:run:visual:percy
```

> **Cursor IDE:** if Cypress fails to launch, run with `env -u ELECTRON_RUN_AS_NODE npm run cy:run:visual`.

## Project structure

```text
testflow-percy/
├── .percy.yml                 # Percy widths / CSS
├── cypress.config.js
├── cypress/
│   ├── e2e/visual/percy.cy.js # Snapshot suite
│   └── support/               # Auth, selectors, TC enums
├── docs/
│   ├── en/                    # English guide
│   └── pt/                    # Portuguese guide
└── .github/workflows/percy.yml
```

## CI

GitHub Actions starts TestFlow as a service and runs `npm run cy:run:visual:percy`.

Required repository secrets:

| Secret | Purpose |
|--------|---------|
| `PERCY_TOKEN` | Percy project token |
| `DEMO_PASSWORD` | Optional override for demo password |

## Docs

- **Português:** [`docs/pt/tests/visual/percy.md`](docs/pt/tests/visual/percy.md)
- **English:** [`docs/en/tests/visual/percy.md`](docs/en/tests/visual/percy.md)

## Related projects

| Project | Role |
|---------|------|
| [testflow](https://github.com/qaschoolbr/testflow) | App under test |
| [testflow-cypress](https://github.com/lflucasferreira/testflow-cypress) | Full Cypress E2E (includes Percy) |
| [testflow-playwright](https://github.com/lflucasferreira/testflow-playwright) | Playwright E2E + native screenshots |
