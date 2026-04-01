<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->
<<<<<<< HEAD

<!-- BEGIN:tool-usage-rules -->

## Tool Usage Rules (CRITICAL)

- When performing actions (installing dependencies, running servers, building the project), you MUST use tools.
- Never describe an action without executing it via a tool.
- For terminal commands, always use the terminal/command execution tool.
- Do NOT respond with plain text when a tool is required.

### Examples

❌ Wrong:
"Now I will install dependencies"

✅ Correct:
(use tool to run `npm install`)

❌ Wrong:
"Run the dev server using npm run dev"

✅ Correct:
(use tool to run `npm run dev`)

If a tool is required and you fail to use it, the task will fail.

<!-- END:tool-usage-rules -->
=======
>>>>>>> c01a3d28b1e77a718d42b9935372847a3bb5c880
