# Accessibility Testing Automation Framework

## Overview

This project is an accessibility automation framework developed using Playwright, JavaScript, and Axe-core to validate web applications against WCAG 2.1 accessibility guidelines.

The framework automates accessibility scans, generates HTML reports, captures screenshots for violations, and integrates with GitHub Actions for continuous accessibility testing.

The objective is to identify accessibility issues early in the development lifecycle and support inclusive, standards-compliant web applications.

---

## Technology Stack

* JavaScript
* Playwright
* Node.js
* Axe-core
* WCAG 2.1
* GitHub Actions

---

## Framework Features

* Automated WCAG 2.1 accessibility validation
* Axe-core integration
* HTML accessibility report generation
* Screenshot capture for accessibility violations
* Keyboard accessibility validation
* ARIA attribute validation
* Color contrast verification
* CI/CD integration using GitHub Actions
* Modular and reusable framework structure

---

## Framework Architecture

```text
accessibility-testing-framework

├── .github
│   └── workflows
│       └── accessibility.yml
│
├── pages
│   └── HomePage.js
│
├── tests
│   └── accessibility.spec.js
│
├── utils
│   └── accessibilityHelper.js
│
├── reports
│   └── accessibility-failure.png
│
├── accessibility-report.html
├── playwright.config.js
├── package.json
└── README.md
```

---

## Accessibility Validation Coverage

The framework validates common accessibility issues, including:

* Missing image alternative text (`alt`)
* Color contrast compliance
* ARIA roles and attributes
* Form labels
* Keyboard accessibility
* Focus visibility
* Semantic HTML
* Heading hierarchy
* Interactive element accessibility

---

## Accessibility Execution Flow

```text
Open Application

        |

Playwright Launches Browser

        |

Navigate to Target Page

        |

Execute Axe-core Scan

        |

Identify WCAG Violations

        |

Generate HTML Report

        |

Capture Screenshot (if violations exist)

        |

Publish Results
```

---

## Sample Accessibility Report

The report includes:

* Rule ID
* Violation description
* Severity (Impact)
* Affected elements
* WCAG reference
* Screenshot (when applicable)

---

## Prerequisites

Install:

* Node.js
* npm
* Git

Verify installation:

```bash
node -version

npm -version
```

---

## Installation

Clone the repository:

```bash
git clone <repository-url>
```

Navigate to the project:

```bash
cd accessibility-testing-framework
```

Install project dependencies:

```bash
npm install
```

Install Playwright browsers:

```bash
npx playwright install
```

---

## Test Execution

Run accessibility tests:

```bash
npm test
```

Run Playwright tests directly:

```bash
npx playwright test
```

---

## Reports

After execution, the framework generates:

* HTML accessibility report
* Screenshot of violations (if detected)

View the Playwright report:

```bash
npx playwright show-report
```

---

## CI/CD Integration

The framework includes a GitHub Actions workflow.

Pipeline execution:

```text
Developer Push

      |

GitHub Actions

      |

Install Node.js

      |

Install Dependencies

      |

Install Playwright Browsers

      |

Execute Accessibility Tests

      |

Generate Reports

      |

Upload Artifacts
```

---

## Future Enhancements

* Multi-page accessibility scanning
* Accessibility trend reporting
* Integration with Jira for defect creation
* Cross-browser accessibility validation
* BrowserStack cloud execution
* Allure reporting integration

---

## Author

**Periyasamy Muthu**

**Senior Consultant | Senior SDET | Automation & Accessibility Test Engineer**

LinkedIn:

https://www.linkedin.com/in/periyasamymuthu
