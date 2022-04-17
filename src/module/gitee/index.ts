import Branch from '../../model/Branch';
import { GitClient } from './../../index';

export default class Gitee implements GitClient {
  getBranches(repo: string): Branch[] {
    return [];
  }
}
