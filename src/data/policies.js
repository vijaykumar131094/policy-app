const policies = {
    1: {
      id: "1",
      title: "Data Protection Policy",
      text: `
  Definitions
  
  Organisation: [Insert organisation name], a company registered under number [company number].
  DPA: The Data Protection Act 2018 which implements the EU’s General Data Protection Regulation.
  Responsible Person: [Insert name of person responsible for data protection within the Organisation].
  Register of Systems: A register of all systems or contexts in which personal data is processed by the Organisation.
  
  1. Data protection principles:
  The Organisation is committed to processing data in accordance with its responsibilities under the DPA.
  `,
      placeholders: {
        "[Insert organisation name]": "",
        "[company number]": "",
      },
      actionPoints: [
        {
          id: "1",
          description: "Review data policies every 6 months.",
          status: "Pending",
        },
        {
          id: "2",
          description: "Ensure compliance with GDPR regulations.",
          status: "In Progress",
        },
      ],
      lastUpdated: null,
      changes: [],
    },
    2: {
      id: "2",
      title: "Security Policy",
      text: `
  Security Guidelines
  
  1. All employees of [Insert organisation name] must use 2FA for logging into company systems.
  2. Conduct monthly vulnerability scans as per [company policy].
  3. Review and update security policies annually.
  
  All security-related data must be stored securely and reviewed by [Insert security manager name].
  `,
      placeholders: {
        "[Insert organisation name]": "",
        "[company policy]": "",
        "[Insert security manager name]": "",
      },
      actionPoints: [
        {
          id: "1",
          description: "Conduct monthly vulnerability scans.",
          status: "Completed",
        },
        {
          id: "2",
          description: "Update security policies annually.",
          status: "Pending",
        },
      ],
      lastUpdated: null,
      changes: [],
    },
  };
  
  export default policies;
  