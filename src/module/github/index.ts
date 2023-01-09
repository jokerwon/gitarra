// import { Octokit } from "octokit";
// 客户端需要从 @octokit/core 引入
import { Octokit } from "@octokit/core";
import { GitClient } from "../../index";
import { warn } from "../../util/log";

const MODULE = "Github";

export interface GithubOptions {
  token: string;
  username?: string;
}

export default class Github implements GitClient {
  private octokit: Octokit;
  username: string;

  constructor({ token, username = "" }: GithubOptions) {
    this.username = username;
    this.octokit = new Octokit({
      auth: token,
    });
  }

  /* *********** User ************* */
  async getUserInfo(username: string = this.username) {
    try {
      const res = await this.octokit.request(`GET /users/{username}`, {
        username,
      });
      return res?.data || {};
    } catch (error) {
      warn(MODULE, error);
      return [];
    }
  }

  /* *********** User End ************* */

  /* *********** Repo ************* */
  async getRepos(owner: string = this.username) {
    try {
      const res = await this.octokit.request(`GET /users/{username}/repos`, {
        username: owner,
      });
      return res?.data || [];
    } catch (error) {
      warn(MODULE, error);
      return [];
    }
  }

  async getRepoInfo(repo: string, owner: string = this.username) {
    try {
      const res = await this.octokit.request(`GET /repos/{owner}/{repo}`, {
        owner,
        repo,
      });
      return res?.data || {};
    } catch (error) {
      warn(MODULE, error);
      return {};
    }
  }

  async getBranches(repo: string, owner: string = this.username) {
    try {
      const res = await this.octokit.request(
        `GET /repos/{owner}/{repo}/branches`,
        {
          owner,
          repo,
        }
      );
      return res?.data || [];
    } catch (error) {
      warn(MODULE, error);
      return [];
    }
  }

  /* *********** Repo End ************* */
}
