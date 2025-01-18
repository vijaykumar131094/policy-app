const policies = [
    {
      id: "data-privacy-policy",
      title: "Data Privacy Policy",
      text: `
        [Insert organisation name] is committed to protecting personal data.
        This policy outlines the principles of data privacy.
        Data must be collected for specific, explicit, and legitimate purposes.
        Personal data must be accurate and kept up to date.
        Data should only be retained for as long as necessary.
        [Insert responsible person] is responsible for implementing this policy.
        This policy is reviewed annually to ensure compliance.
      `,
      placeholders: {
        "[Insert organisation name]": "Your Organisation",
        "[Insert responsible person]": "John Doe",
      },
      actionPoints: [
        {
          id: "review-policy",
          description: "Review policy compliance every 6 months.",
          steps: [
            "Gather compliance data from all departments.",
            "Compare current practices to GDPR standards.",
            "Update any non-compliant processes.",
          ],
        },
        {
          id: "employee-training",
          description: "Conduct employee training on data privacy.",
          steps: [
            "Schedule training sessions for all teams.",
            "Cover GDPR basics and company-specific policies.",
            "Provide an assessment at the end of training.",
          ],
        },
      ],
    },
    {
      id: "security-guidelines",
      title: "Security Guidelines",
      text: `
        [Insert organisation name] ensures the security of its systems.
        Employees must use strong passwords and change them regularly.
        Unauthorized access to sensitive data is prohibited.
        [Insert responsible person] oversees security implementations.
        Security breaches must be reported immediately.
        Systems must be regularly updated to avoid vulnerabilities.
        This policy is reviewed semi-annually for effectiveness.
      `,
      placeholders: {
        "[Insert organisation name]": "Your Organisation",
        "[Insert responsible person]": "Jane Smith",
      },
      actionPoints: [
        {
          id: "audit-systems",
          description: "Conduct system audits every 3 months.",
          steps: [
            "Review user access logs for unauthorized access.",
            "Ensure firewalls and antivirus are updated.",
            "Document and address any vulnerabilities.",
          ],
        },
        {
          id: "incident-response",
          description: "Develop and implement an incident response plan.",
          steps: [
            "Identify key stakeholders for incident management.",
            "Outline a step-by-step process for responding to breaches.",
            "Train employees on the response plan.",
          ],
        },
      ],
    },
  ];
  
  export default policies;
  