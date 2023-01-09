import { describe, it, expect } from "vitest";
import Github from "./";

const GITHUB_TOKEN = "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";
const USERNAME = "jokerwon";
const REPO = "keep-pace";

const github = new Github({ token: GITHUB_TOKEN, username: USERNAME });

describe("Github", () => {
  it("instance should not be null", () => {
    expect(github).not.toBeNull();
  });

  it("user should not be null", async () => {
    const userInfo = await github.getUserInfo();
    expect(userInfo).not.toBeNull();
  });

  it.skip("repos should be empty", async () => {
    const res = await github.getRepos("");
    expect(res.length).toBe(0);
  });

  it.skip("repos should not be empty", async () => {
    const res = await github.getRepos();
    expect(res.length).greaterThan(0);
  });

  it.skip("repo should not be null", async () => {
    const res = await github.getRepoInfo(REPO);
    expect(res).not.toBeNull();
  });

  it.skip("branches should not be empty", async () => {
    const res = await github.getBranches(REPO);
    expect(res.length).greaterThan(0);
  });
});
