# Best Practices for AI Assisted Coding
## ChatGPT, Claude, Gemini, Deepseek

This guide will help you develop effective strategies for working with AI coding assistants to enhance your learning and productivity.

---

## General Tips when prompting code for learning:

### 1  Start Small
Begin with simple, focused requests. Don't ask for an entire application at once. Break down complex projects into smaller, manageable pieces.

**Example Prompts:**
- "Create a simple function that calculates the area of a circle"
- "Write a basic HTML structure for a personal blog page"
- "Show me how to create a simple list in Python"

### 2 Remember that AI tools hallucinate
AI models can sometimes generate code that looks correct but doesn't actually work, or provide information that seems plausible but is incorrect. Always verify the code and information you receive.

**What is AI hallucination?**
- AI generates code that looks syntactically correct but has logical errors
- AI provides outdated or incorrect information about libraries/frameworks
- AI suggests non-existent functions or methods
- AI creates code that works in theory but fails in practice

**How to identify hallucinations:**
- Test the code immediately after receiving it
- Check if the suggested functions/methods actually exist in the documentation
- Verify that the library versions mentioned are current
- Look for inconsistencies in the AI's explanations

**Example Prompts to reduce hallucinations:**
- "Please verify this code will work with [specific version] of [library]"
- "Can you show me the official documentation for this approach?"
- "Test this code and make sure it runs without errors"
- "What are the potential issues with this implementation?"

**Strategies to handle hallucinations:**
- Always test code in your development environment
- Cross-reference with official documentation
- Ask the AI to explain their reasoning
- Request multiple approaches to compare
- Use specific version numbers when asking about libraries

### 3  Define the language and the specific library you would like to use
Be explicit about your technology choices to get more accurate and relevant code.

**Example Prompts:**
- "Write this in Python using the pandas library"
- "Create a React component using functional components and hooks"
- "Use vanilla JavaScript, no frameworks"

### 4  Request code you can read using simple syntax - later you can move towards more advanced syntax
Start with clear, readable code that you can understand. As you learn, gradually request more advanced techniques.

**Example Prompts:**
- "Use simple variable names and basic loops, no advanced features"
- "Write this with clear comments explaining each step"
- "Avoid complex one-liners, make it easy to follow"

### 5  Request comments for every line
Comments help you understand what each part of the code does, which is crucial for learning.

**Example Prompts:**
- "Add detailed comments explaining what each line does"
- "Include comments for beginners to understand the logic"
- "Comment on why you chose this approach"

### 6  Test if the code runs
Always test the code you receive. If it doesn't work, the AI can help you debug it.


### 7  Post the error message in the prompt when facing bugs
Include the exact error message when asking for help with debugging.

**Example Prompts:**
- "I'm getting this error: [paste error message]. Can you help fix it?"
- "The code runs but produces unexpected output: [describe what happens]"
- "I'm getting a syntax error on line 5: [paste error]"

### 8  Provide image references as a style guide
When working on visual projects, include images or descriptions of the desired outcome.

**Example Prompts:**
- "Create a website that looks similar to [describe or reference image]"
- "Design a UI that follows the style of [specific website/app]"
- "Make it look modern and clean, similar to [reference]"

---

## Advanced Prompting Strategies:

### 9  Use the "Explain Like I'm 5" approach
Ask for explanations in simple terms to build foundational understanding.

**Example Prompts:**
- "Explain this concept as if I'm a complete beginner"
- "Break down this algorithm step by step in simple terms"
- "What's happening here in plain English?"

### 10  Request multiple approaches
Ask for different ways to solve the same problem to understand various techniques.

**Example Prompts:**
- "Show me 3 different ways to solve this problem"
- "What's the beginner-friendly approach vs. the advanced approach?"
- "Compare the pros and cons of different solutions"

### 11  Ask for learning resources
Request additional materials to deepen your understanding.

**Example Prompts:**
- "What should I study next to understand this better?"
- "Can you recommend tutorials or documentation for this topic?"
- "What are the key concepts I should focus on?"

---

## General Tips when working with Cursor:

### 1  Use the chat feature for complex discussions
When you need to discuss multiple approaches or get detailed explanations, use the chat rather than inline suggestions.

**Example Prompts:**
- "Let's discuss the best architecture for this project"
- "I want to understand the trade-offs between different approaches"
- "Can you walk me through the design decisions?"

### 2  Leverage inline suggestions for quick fixes
Use Cursor's inline suggestions for small improvements and quick fixes.

**Example Prompts:**
- "Improve this function's performance"
- "Make this code more readable"
- "Add error handling to this function"

### 3  Use the file context for better assistance
Open relevant files so the AI can understand your project structure and provide more contextual help.

**Example Prompts:**
- "How does this function relate to the rest of my codebase?"
- "Suggest improvements based on my existing code style"
- "Help me integrate this with my current project structure"

### 4 Highlight code + Control + K - Change specific areas
Use this powerful feature to make targeted changes to specific parts of your code. Select the code you want to modify and use Ctrl+K to get AI suggestions for that specific selection.

**Example Prompts:**
- "Make this function more efficient"
- "Convert this to use async/await"
- "Add error handling to this section"
- "Refactor this to use a different data structure"

### 5 Switch between 'Agent' mode and 'Ask' mode for learning about the code
Use 'Ask' mode when you want to understand existing code, and 'Agent' mode when you want to make changes or generate new code.

**Ask Mode Examples:**
- "What does this function do?"
- "Explain the logic in this loop"
- "How does this component interact with others?"
- "What are the potential issues with this approach?"

**Agent Mode Examples:**
- "Add input validation to this form"
- "Create a new component for displaying user data"
- "Implement error handling for this API call"
- "Optimize this database query"

### 6 Use 'Restore Checkpoint' when you try something that doesn't work
Don't be afraid to experiment! If your changes don't work as expected, use the restore checkpoint feature to go back to a working state and try a different approach.

**When to use:**
- After making multiple changes that break the code
- When you want to try a completely different approach
- Before implementing a major refactor
- When you're unsure about the direction of your changes

### 7 Start new chat windows when starting a new feature
Keep your conversations focused by starting fresh chats for different features or topics. This helps maintain context and makes it easier to reference specific discussions.

**Best practices:**
- One chat per major feature or component
- Separate chats for debugging vs. new development
- Use descriptive names for your chat sessions
- Archive old chats when projects are complete

### 8 Use @ symbol to specify specific files as context
Reference specific files in your project to give the AI better context about your codebase structure and existing patterns.

**Example Prompts:**
- "@utils.js How can I integrate this helper function with my main component?"
- "@package.json What dependencies do I need to add for this feature?"
- "@README.md Can you help me update the documentation for this new feature?"
- "@config.js How should I modify the configuration for this new environment?"

### 9 Use @ symbol to include documentation to the context or @web to search the web for documentation
Leverage Cursor's ability to pull in external documentation and web resources to get more accurate and up-to-date information.

**Using @ for documentation:**
- "@reactjs.org/docs/hooks-intro.html" - Include React documentation
- "@python.org/3/library/os.html" - Include Python standard library docs
- "@github.com/user/repo/README.md" - Include project documentation

**Using @web for web search:**
- "@web React hooks best practices 2024"
- "@web Python async await tutorial"
- "@web JavaScript ES6 features"
- "@web CSS Grid layout examples"

**Example Prompts:**
- "@web Can you show me the latest React Router v6 syntax?"
- "@reactjs.org/docs/context.html How do I implement this pattern in my app?"
- "@web What's the current best practice for handling forms in React?"

### 10 Create a Cursor-Rules file
Create a `.cursorrules` file in your project root to customize how the AI behaves with your codebase. This helps maintain consistency and provides context about your project.

**What to include in .cursorrules:**
```
# Project: Clean and Simple Web Application
- Maintain minimal design principles
- Always include detailed comments for every function and complex logic
- Keep code readable and simple - avoid over-engineering
- Write explanations for all new functions explaining their purpose and usage
- Use clear, descriptive variable and function names
- Follow consistent indentation and formatting
- Prefer simple solutions over complex ones
- Include error handling for all user inputs
- Write self-documenting code with meaningful names
- Add inline comments for any non-obvious logic
- Keep functions small and focused on single responsibilities
- Use consistent naming conventions throughout the project
```

**Benefits:**
- Consistent code style across the project
- Better AI suggestions aligned with your preferences
- Reduced need to repeat project context
- Improved code quality and maintainability

---

## Prompt Templates for Common Tasks:

### Learning a New Concept
```
I'm learning [CONCEPT] and want to understand [SPECIFIC_ASPECT]. 
Can you:
1. Explain it in simple terms
2. Show me a basic example
3. Provide a slightly more complex example
4. Suggest what to practice next
```

### Debugging Code
```
I'm working on [PROJECT_DESCRIPTION] and getting this error:
[PASTE_ERROR_MESSAGE]

Here's my code:
[PASTE_CODE]

Can you:
1. Explain what's causing the error
2. Show me how to fix it
3. Explain how to avoid this in the future
```

### Building a Feature
```
I want to add [FEATURE_DESCRIPTION] to my [PROJECT_TYPE] project.
I'm using [LANGUAGE/FRAMEWORK] and my current skill level is [BEGINNER/INTERMEDIATE/ADVANCED].

Can you:
1. Break this down into small steps
2. Start with the simplest implementation
3. Add comments explaining each part
4. Suggest how to test it
```

### Code Review and Improvement
```
I've written this code for [PURPOSE]:
[PASTE_CODE]

Can you:
1. Review it for best practices
2. Suggest improvements
3. Point out potential issues
4. Show me a more efficient approach
```


