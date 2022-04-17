import Gitee from './module/gitee/index';
import Github from './module/github/index';
import Branch from './model/Branch';

enum ClientType {
  GITHUB = 'github',
  GITEE = 'gitee',
}

export interface GitClient {
  getBranches: (repo: string) => Branch[];
}

interface GitarraOptions {
  client: ClientType;
}
export default abstract class Gitarra {
  client: GitClient;

  constructor(options: GitarraOptions) {
    if (options.client === ClientType.GITHUB) {
      this.client = new Gitee();
    } else if (options.client === ClientType.GITEE) {
      this.client = new Github();
    } else {
      throw new Error('required client in [github, gitee]');
    }
  }
}
