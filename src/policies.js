const policies = {
    '1': {
        id: '1',
        title: 'Data Privacy',
        file: '/policies/data-privacy.pdf',
        points: [
            { description: 'Review every quarter', completed: true },
            { description: 'Conduct regular training sessions', completed: false },
        ],
    },
    '2': {
        id: '2',
        title: 'Security Guidelines',
        file: '/policies/security-guidelines.pdf',
        points: [
            { description: 'Ensure all endpoints are secured', completed: true },
            { description: 'Perform monthly vulnerability scans', completed: false },
        ],
    },
    '3': {
        id: '3',
        title: 'Code of Conduct',
        file: '/policies/code-of-conduct.pdf',
        points: [], // No action points available for this policy
    },
};

export default policies;
