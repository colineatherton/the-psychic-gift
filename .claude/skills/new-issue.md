Create a GitHub issue in The Psychic Gift repo and add it to the project board.

Steps:
1. Create the issue: `gh issue create --title "..." --label "..." --body "..."`
2. Get the node_id: `gh api repos/colineatherton/the-psychic-gift/issues/<number> --jq .node_id`
3. Add to project board using GraphQL:
```
gh api graphql -f query='mutation { addProjectV2ItemById(input: {projectId: "PVT_kwHOAKeW5s4BIzAl", contentId: "<node_id>"}) { item { id } } }'
```
4. Confirm with the issue URL and note it's been added to the board.

The project board is at: https://github.com/users/colineatherton/projects/3/views/1
