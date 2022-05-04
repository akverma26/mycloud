## Deployment



* git branches

  ```
  - build
  (only `build` folder pushed here and site is served through github pages from this branch)
  
  - src
  (entire project except `build` folder pushed here)
  ```

  

* Deployment after changes

  ```shell
  # Build the project
  npm run build
  
  # Add files to git, files names changes after every build
  git add -A
  
  # Commit the changes after build
  git commit -am "<message>"
  
  # Push changes on remote branch: dev
  git push origin dev
  
  # Push build folder as subtree to branch `build` to be served from there
  git subtree push --prefix build origin build
  ```



* Settings done before deployment
  * `"homepage": "/mycloud"` static files to be served from `https://domain.com/mycloud/`