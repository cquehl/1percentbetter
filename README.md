### 🤝 Collaborative Workflow

This document outlines our standard Git workflow and repository settings to maintain a clean, consistent, and efficient codebase. Adherence to these guidelines ensures a streamlined development process and high code quality.

#### 1. Repository Settings & Automation

To facilitate an organized and automated workflow, the following key repository settings are enabled:

* **Linear History:** The `main` branch enforces a linear commit history, meaning all changes are integrated via "Squash and merge" or "Rebase and merge."
* **Automatic Branch Deletion:** Feature branches are automatically deleted on GitHub after they are successfully merged into `main`.
* **Automatic Issue Closure:** Pull Requests that reference issues (e.g., `Closes #123`, `Fixes #456`) will automatically close the linked issue upon merging.
* **Automatic Reviewers:** All team members are designated as `CODEOWNERS` and will be automatically requested for review on every Pull Request, saving manual assignment.
* **Branch Update Suggestions:** GitHub proactively suggests updating feature branches if `main` has new changes, aiding in conflict prevention.
* **Auto-merge (Enabled):** Pull Requests can be set to automatically merge once all required reviews and status checks have passed.

#### 2. Branching Strategy

* **Feature Branches:** All development for new features or bug fixes must occur on a dedicated branch.
* **Base Branch:** Always branch from the `main` branch.
    ```zsh
    git checkout main
    git pull origin main                      # Synchronize with remote main
    git checkout -b feature/descriptive-name  # Create and switch to new branch
    # e.g., feature/user-authentication, bugfix/login-error
    ```

#### 3. Commit Hygiene

* **Atomic Commits:** Make frequent, small, and logical commits that encapsulate a single change.
* **Clear Messages:** Write concise, descriptive commit messages.
    * **Subject Line:** Begin with a brief summary (under 70 characters).
    * **Body (Optional):** Provide further detail if necessary, explaining the 'what' and 'why'.

#### 4. Keeping Your Branch Synced

* **Regular Rebasing:** Before creating a Pull Request (PR) and periodically during development, rebase your feature branch onto the latest `main`. This maintains a linear history and minimizes merge conflicts.
    ```zsh
    git checkout your-feature-branch
    git pull --rebase origin main             # Rebase onto latest main, resolve conflicts if any
    git push --force-with-lease origin your-feature-branch # Update remote branch
    ```
    * *Note:* `git push --force-with-lease` is safe for rebased branches you own, preventing accidental overwrites of others' work.

#### 5. Pull Request (PR) Submission

* **Push Branch:**
    ```zsh
    git push origin your-feature-branch
    ```
* **Create PR (Web UI Only):** Navigate to your repository on GitHub.com and create a new Pull Request. This step currently requires the web interface for efficient linking and description formatting.
* **PR Details:**
    * **Title:** Summarize the complete scope of the PR.
    * **Description:** Provide comprehensive context: what was changed, why, and how it addresses the issue. Link relevant issues (e.g., `Closes #123`, `Fixes #456`).

#### 6. Code Review Process

* **Mandatory Approval:** All PRs require at least one approving review before merging.
* **Addressing Feedback:** Respond to all review comments. Make necessary code adjustments and explicitly resolve conversation threads. Unresolved conversations will block merging.
* **Stale Reviews:** Pushing new commits to an approved PR will dismiss existing approvals, requiring a fresh review of the updated code.

#### 7. Merging Pull Requests

* **Strategy:** Only "Squash and merge" or "Rebase and merge" are permitted. "Squash and merge" is generally preferred for consolidating feature work into a single, clean commit on `main`.
* **Commit Message:** When squashing, **always edit the default commit message** to accurately summarize the entire PR's contribution.
    * *Note:* Merging is typically done via the GitHub web interface after all checks and reviews pass.

#### 8. Branch Cleanup

* **Automatic Deletion:** Upon merging your PR, GitHub will automatically delete the head branch on the remote.
* **Local Deletion:** It is good practice to delete your local feature branch after a successful merge.
    ```zsh
    git checkout main
    git branch -d your-feature-branch # Will only delete if fully merged
    ```

---

### Terminal Workflow

This section outlines how to manage the lifecycle almost entirely from your terminal, minimizing direct GitHub UI interaction, primarily for PR creation and review.

**Assumptions:**
* You have `git` installed and configured.
* You've cloned your repository.
* You have SSH keys set up for GitHub for passwordless pushes/pulls.

---

#### 1. Setup (One-time or Infrequent)

* **Global Git Configuration (if not already done):**
    ```zsh
    git config --global user.name "Your Name"
    git config --global user.email "your.email@example.com"
    git config --global init.defaultBranch main # Sets 'main' as default for new repos
    ```

#### 2. Starting Work on a New Feature/Bugfix

1.  **Ensure `main` is up-to-date:**
    ```zsh
    git checkout main
    git pull origin main
    ```
2.  **Create and switch to your new branch:**
    ```zsh
    git checkout -b feature/your-feature-name # or bugfix/your-bugfix-name
    ```

#### 3. Developing and Committing

1.  **Make your changes.**
2.  **Stage changes:**
    ```zsh
    git add . # Or git add path/to/file.js
    ```
3.  **Commit changes:**
    ```zsh
    git commit -m "feat: Add user login endpoint" # Concise subject line
    # For a multi-line message:
    # git commit -m "feat: Implement new user profile page
    #
    # This commit introduces a redesigned user profile page.
    # It includes a new section for user stats and improves layout responsiveness."
    ```
    * *Pro-tip (Zsh/Oh My Zsh):* Consider setting up aliases for common git commands (e.g., `gco` for `git checkout`, `gs` for `git status`).

#### 4. Keeping Your Branch Synced with `main`

* **Before opening a PR, or anytime `main` has new changes you need:**
    ```zsh
    git checkout feature/your-feature-name
    git pull --rebase origin main
    # If conflicts occur, resolve them, then:
    # git add .
    # git rebase --continue
    # Repeat until rebase is done
    git push --force-with-lease origin feature/your-feature-name
    ```

#### 5. Submitting Your Work (Pushing to Remote)

1.  **Push your feature branch to GitHub:**
    ```zsh
    git push origin feature/your-feature-name
    ```
    * The first time, Zsh might suggest: `git push --set-upstream origin feature/your-feature-name`. Use that, then subsequent pushes can just be `git push`.

#### 6. Pull Request Creation & Review

* **Create PR:** This step is best done via the **GitHub Web UI**.
    * After pushing, GitHub often shows a banner with a direct link to create a PR.
    * Fill out the title, description, and link issues. Reviewers will be automatically assigned.
* **PR Review:** **GitHub Web UI is required for effective code review.** This is where comments are made, discussions happen, and changes are requested/approved.

#### 7. Merging Your Pull Request

* **GitHub Web UI:** Once your PR has met all requirements (approvals, resolved conversations, passed checks), you'll use the **GitHub Web UI** to perform the "Squash and merge" or "Rebase and merge" operation.
    * You'll be prompted to edit the merge commit message. **Ensure this message accurately reflects the squashed changes.**

#### 8. Cleaning Up

1.  **Switch to `main` and pull latest changes (including your merged PR):**
    ```zsh
    git checkout main
    git pull origin main
    ```
2.  **Delete your local feature branch:**
    ```zsh
    git branch -d feature/your-feature-name # Will only delete if fully merged
    # If it complains about unmerged changes (e.g., you exited a rebase part way)
    # git branch -D feature/your-feature-name # Force delete (use with caution)
    ```
    * *Note:* The remote branch will be automatically deleted by GitHub's settings.

---