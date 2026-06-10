// ONE source of truth for repositories!
export const repositories = [
    { id: '1', name: 'my-next-app', status: 'Connected' },
    { id: '2', name: 'restaurant-crm', status: 'Connected' },
    { id: '3', name: 'portfolio-site', status: 'Connected' }
];

export const pipelines = [
    // Higher ID = more recent. Mix of Success and Failed statuses.
    { id: '104', repoId: '1', branch: 'main', status: 'Failed', time: '2 mins ago', triggeredBy: 'Kushagra' },
    { id: '103', repoId: '1', branch: 'main', status: 'Failed', time: '10 mins ago', triggeredBy: 'Kushagra' },
    { id: '102', repoId: '1', branch: 'feature/auth', status: 'Success', time: '1 hour ago', triggeredBy: 'Kushagra' },
    { id: '101', repoId: '1', branch: 'hotfix/typo', status: 'Success', time: '3 hours ago', triggeredBy: 'Kushagra' },
];

export const pipelineLogs = {
    '104': `[14:02:01] Step 1: Installing dependencies... OK
[14:02:45] Step 2: Building project...
[14:03:10] Error: Cannot find module 'react-dom/client'
[14:03:11] Build failed with exit code 1.`,
    '103': `[12:00:00] TypeError: Cannot read properties of undefined (reading 'map')
[12:00:02] Pipeline failed.`
};