export const repositories = [
    { id: '1', name: 'my-next-app', status: 'Connected' },
    { id: '2', name: 'restaurant-crm', status: 'Connected' },
    { id: '3', name: 'portfolio-site', status: 'Connected' }
];
export const pipelines = [
    { id: '104', repoId: '1', branch: 'main', status: 'Failed', time: '2 mins ago', triggeredBy: 'Kushagra' },
    { id: '103', repoId: '1', branch: 'feature/auth', status: 'Failed', time: '1 hour ago', triggeredBy: 'Kushagra' },
    { id: '102', repoId: '1', branch: 'hotfix/typo', status: 'Failed', time: '3 hours ago', triggeredBy: 'Kushagra' },
    { id: '101', repoId: '1', branch: 'main', status: 'Success', time: '1 day ago', triggeredBy: 'Kushagra' },
];

// The 3 specific errors from the prompt
export const pipelineLogs = {
    '104': `[14:02:01] Running build...
[14:02:05] Checking environment variables...
[14:02:06] Error: DATABASE_URL missing
[14:02:06] Build failed.`,

    '103': `[12:00:00] Installing dependencies...
[12:00:45] Building Next.js app...
[12:01:10] Module not found: @/components/Navbar
[12:01:11] Build failed.`,

    '102': `[09:00:00] Running tests...
[09:00:05] TypeError: Cannot read properties of undefined
[09:00:06] Tests failed.`,

    '101': `[08:00:00] Running build...
[08:01:00] Build successful!`
};
// Mock AI Analysis Results
export const mockAnalyses = {
    '104': {
        rootCause: 'DATABASE_URL environment variable is not configured.',
        impact: 'Database initialization fails. Users cannot access data.',
        severity: 'High'
    },
    '103': {
        rootCause: 'Import path references a file that cannot be found (@/components/Navbar).',
        impact: 'Application build cannot complete.',
        severity: 'Medium'
    },
    '102': {
        rootCause: 'Application is accessing a value before it exists.',
        impact: 'Runtime crash.',
        severity: 'High'
    }
};