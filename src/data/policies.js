const policies = {
    '1': {
        id: '1',
        title: 'Data Policy',
        file: '/policies/data-policy.pdf', // Path to the policy file
        points: [
            { description: 'Need to review every 3 months', completed: true },
            { description: 'Need to conduct a network assessment', completed: false },
        ],
    },
    '2': {
        id: '2',
        title: 'Security Policy',
        file: '/policies/security-policy.pdf',
        points: [
            { description: 'Ensure all users have 2FA enabled', completed: true },
            { description: 'Conduct quarterly vulnerability scans', completed: false },
        ],
    },
};

export default policies;
