import axios from "axios";
import React, { useEffect, useState } from "react";
import "./styles.css";
import { Link } from "react-router-dom";

const RepoList = () => {
  //State management
  const [repos, setRepos] = useState(null);
  const gitRepos = async () => {
    const response = await axios.get(
      "https://api.github.com/search/repositories?q=XXX"
    );
    console.log(response.data.items);
    setRepos(response.data.items);
    return response.data;
  };
  useEffect(() => {
    gitRepos().catch((e) => console.error(e));
  }, []);
  return (
    <div className="users-cont">
      {repos ? (
        repos.map((repo) => (
          <div className="user-card-cont" key={repo.id}>
            <img
              src={repo.owner.avatar_url}
              alt="userAvatar"
              className="user-avatar"
            />
            <span className="username">{repo.name}</span>

            <span className="repo-lang-span">Language: {repo.language}</span>
            <div>
              By:{" "}
              <Link
                className="repo-owner"
                to={`/users/user/${repo.owner.login}`}
              >
                {repo.owner.login}
              </Link>
            </div>

            <Link to={`/repoDetails/${repo.name}/${repo.owner.login}`}>
            <button>View Repo</button>
            </Link>
          </div>
        ))
      ) : (
        <h1>Loading...</h1>
      )}
      <Link to="/users">Go to home</Link>
    </div>
  );
};

export default RepoList;
