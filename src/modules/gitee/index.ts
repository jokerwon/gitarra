interface Branch {
  id: number;
  name: string;
}

export function getBranchs(repo: string): Array<Branch> {
  const branches: Array<Branch> = [];
  const branch: Branch = {
    id: 1,
    name: 'master',
  };
  branches.push(branch);
  return branches;
}
