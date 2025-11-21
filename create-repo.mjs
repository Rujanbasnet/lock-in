import { Octokit } from '@octokit/rest';

async function getAccessToken() {
  const hostname = process.env.REPLIT_CONNECTORS_HOSTNAME;
  const xReplitToken = process.env.REPL_IDENTITY 
    ? 'repl ' + process.env.REPL_IDENTITY 
    : process.env.WEB_REPL_RENEWAL 
    ? 'depl ' + process.env.WEB_REPL_RENEWAL 
    : null;

  if (!xReplitToken) {
    throw new Error('X_REPLIT_TOKEN not found');
  }

  const res = await fetch(
    'https://' + hostname + '/api/v2/connection?include_secrets=true&connector_names=github',
    {
      headers: {
        'Accept': 'application/json',
        'X_REPLIT_TOKEN': xReplitToken
      }
    }
  );
  const data = await res.json();
  const connectionSettings = data.items?.[0];
  const accessToken = connectionSettings?.settings?.access_token || connectionSettings?.settings?.oauth?.credentials?.access_token;

  if (!connectionSettings || !accessToken) {
    throw new Error('GitHub not connected');
  }
  return accessToken;
}

async function main() {
  try {
    const accessToken = await getAccessToken();
    const octokit = new Octokit({ auth: accessToken });
    
    const user = await octokit.rest.users.getAuthenticated();
    const username = user.data.login;
    
    console.log(`Creating repository for user: ${username}`);
    
    const repo = await octokit.rest.repos.createForAuthenticatedUser({
      name: 'lock-in',
      description: 'LOCK IN - A productivity app with authentication and paid subscriptions',
      private: false,
      auto_init: false,
    });
    
    console.log(`Repository created: ${repo.data.html_url}`);
    console.log(repo.data.clone_url);
  } catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }
}

main();
