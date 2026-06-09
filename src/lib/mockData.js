// This acts as our fake database for Step 1.
export const repositories = [
    { id: '1', name: 'my-next-app', status: 'Failed' },
    { id: '2', name: 'restaurant-crm', status: 'Healthy' },
    { id: '3', name: 'portfolio-site', status: 'Healthy' }
];
export const pipelines = [
    { id: '103', repoId: '1', branch: 'main', status: 'Failed', time: '10 mins ago' },
    { id: '102', repoId: '1', branch: 'feature/auth', status: 'Failed', time: '1 hour ago' },
    { id: '101', repoId: '1', branch: 'hotfix/typo', status: 'Failed', time: '3 hours ago' },
];
export const pipelineLogs = {
    '101': `[14:02:01] Step 1: Installing dependencies... OK
[14:02:45] Step 2: Building project...
[14:03:10] Error: Cannot find module 'react-dom/client'
[14:03:11] Build failed with exit code 1.`
};