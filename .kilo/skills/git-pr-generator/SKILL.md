---
name: git-pr-generator
description: Analyzes Git changes between the current branch and master to automatically generate a PR title, a conventional commit message, and a full Pull Request description. Use this skill whenever the user mentions: generating a PR, creating a commit message, analyzing branch changes, preparing a pull request, or anything related to git diff, git log, or reviewing changes before merging.
---

# Git PR Generator

This skill analyzes the changes on the current branch relative to `master` and
produces three ready-to-use artifacts: a PR title, a commit message, and a PR
description.

---

## Workflow

### Step 1 — Collect Git data

Run the following commands in the project directory (adjust if the base branch
is not `master`):

```bash
# Current branch
git rev-parse --abbrev-ref HEAD

# Commit list since master
git log master..HEAD --oneline --no-merges

# Summary diff (for large projects)
git diff master...HEAD --stat

# Full diff (complete patch)
git diff master...HEAD

# Modified / added / deleted files
git diff master...HEAD --name-status
```

> **If the diff is very long (>500 lines)**: use `--stat` + the most impacted
> files rather than the full patch to avoid saturating the context window.

---

### Step 2 — Analyze the changes

From the collected data, identify:

- **Change type**: feat / fix / refactor / docs / test / chore / perf / style / ci / build
- **Scope**: primary module or component affected
- **Impact**: breaking change? migration required? dependencies modified?
- **Functional summary**: what the branch concretely accomplishes

---

### Step 3 — Generate the three artifacts

#### A. PR Title

Format: `[type(scope)] Short imperative description (≤72 characters)`

Examples:

- `feat(auth): add OAuth2 login via Google`
- `fix(api): handle null response on user endpoint`
- `refactor(cart): extract discount calculation logic`

Rules:

- Imperative mood, no capital after `:`, no trailing period
- Scope optional but recommended
- ≤ 72 characters

---

#### B. Commit Message (Conventional Commits)

```
<type>(<scope>): <short description>

<optional body — why this change, not how>

<optional footer>
BREAKING CHANGE: <description if applicable>
Closes #<issue> / Refs #<issue>
```

Type examples: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`,
`perf`, `ci`, `build`, `revert`

---

#### C. PR Description (Markdown)

Recommended structure:

```markdown
## 📋 Summary

<!-- One sentence: what this PR does -->

## 🎯 Motivation

<!-- Why this change is necessary -->

## 🔄 Changes

<!-- List of main modifications -->

-
-

## 🧪 Testing

<!-- How to test / what has been tested -->

- [ ] Unit tests added / updated
- [ ] Manual testing performed
- [ ] No regressions observed

## ⚠️ Notes

<!-- Breaking changes, migrations, dependencies, side effects -->

## 📸 Screenshots (if applicable)

<!-- Before / After for visual changes -->
```

Adapt and remove irrelevant sections based on the actual diff content.

---

## Expected output

Present the three artifacts in clearly separated blocks, ready to copy-paste:

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🏷️  PR TITLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
feat(scope): ...

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
💬  COMMIT MESSAGE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
feat(scope): ...

Message body...

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📄  PR DESCRIPTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
## 📋 Summary
...
```

---

## Edge cases

| Situation                   | Behavior                                                             |
| --------------------------- | -------------------------------------------------------------------- |
| Base branch ≠ `master`      | Ask for confirmation or use `main` / `develop` if detected           |
| No commits (empty branch)   | Inform the user, generate nothing                                    |
| Merge commits present       | Ignore them (`--no-merges`)                                          |
| Diff > 500 lines            | Summarize per file, do not read the full patch                       |
| Multiple functional domains | Scope = primary module, list others in the description               |
| Breaking change detected    | Add `!` after the type: `feat(api)!:` and a `BREAKING CHANGE` footer |

---

## Style notes

- **Output language**: use the dominant language found in existing commit messages
  in the repo (detect with `git log --oneline -20`). If mixed or absent, default
  to **English**.
- **Tone**: professional, concise, business-value oriented (not pure tech jargon).
- **Description length**: proportional to diff complexity — avoid empty
  descriptions or unnecessarily long walls of text.

Always remember to ask the user if the questions suits him