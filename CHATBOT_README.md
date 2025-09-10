# AI Chatbot Feature

## Overview
A fully integrated AI chatbot system that provides career guidance and educational advice to users. The chatbot appears as a floating button on all pages and expands into a full conversation interface when clicked.

## Features

### 🎯 Core Functionality
- **Floating Button**: Always visible floating button in the bottom-right corner
- **Expandable Modal**: Full-screen chat interface that opens when clicked
- **Real-time Chat**: Interactive conversation with AI responses
- **Context-Aware Responses**: Intelligent responses based on user input keywords
- **Quick Action Buttons**: Pre-defined questions for common topics

### 🎨 Design Features
- **Consistent Styling**: Follows the existing design system with Tailwind CSS
- **Smooth Animations**: Elegant transitions and hover effects
- **Mobile Responsive**: Optimized for both desktop and mobile devices
- **Accessibility**: Proper ARIA labels and keyboard navigation

### 💬 Chat Features
- **Message History**: Persistent conversation during session
- **Typing Indicators**: Visual feedback when AI is "thinking"
- **Timestamps**: Message timestamps for better UX
- **Clear Chat**: Option to reset conversation
- **Quick Actions**: Pre-defined question buttons for common topics

## Components

### 1. ChatbotButton (`src/components/ChatbotButton.tsx`)
- Floating action button with gradient styling
- Animated hover effects and pulse animation
- Tooltip on hover
- Mobile-responsive sizing

### 2. ChatbotModal (`src/components/ChatbotModal.tsx`)
- Full conversation interface
- Message display with user/AI differentiation
- Input field with send button
- Quick action buttons for common questions
- Scrollable message area
- Clear chat functionality

### 3. ChatMessage (`src/components/ChatMessage.tsx`)
- Individual message component
- User and AI message styling
- Avatar icons for message senders
- Timestamp display
- Typing indicator support

### 4. Chatbot (`src/components/Chatbot.tsx`)
- Main container component
- State management for open/closed state
- Integration of all chatbot components

## AI Response System

The chatbot uses a keyword-based response system that provides contextually relevant answers:

### Response Categories
- **Career Questions**: Job opportunities, career paths, professional advice
- **Education Topics**: College choices, degrees, educational requirements
- **Technology**: Tech careers, programming, software development
- **Salary/Compensation**: Income discussions, financial considerations
- **General Help**: Guidance for confused or lost users

### Sample Responses
- Career: "That's a great question about careers! The job market is constantly evolving..."
- Education: "Education is a crucial foundation for many careers! The choice between different degrees..."
- Tech: "The tech industry offers incredible opportunities! Whether you're interested in software development..."

## Integration

The chatbot is integrated into the main App component and appears on all pages:

```tsx
// In App.tsx
import Chatbot from "./components/Chatbot";

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="light" storageKey="career-compass-theme">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* All routes */}
          </Routes>
          <Chatbot /> {/* Global chatbot */}
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);
```

## Styling

The chatbot follows the existing design system:

### Colors
- Primary: `hsl(var(--primary))` - Blue gradient
- Accent: `hsl(var(--accent))` - Purple gradient
- Background: `hsl(var(--background))` - Light background
- Text: `hsl(var(--foreground))` - Dark text

### Gradients
- Button: `bg-gradient-primary` - Blue gradient
- AI Avatar: `bg-gradient-accent` - Purple gradient
- User Avatar: `bg-gradient-primary` - Blue gradient

### Shadows
- Button: `shadow-elegant` - Subtle shadow
- Modal: `shadow-elegant` - Card shadow
- Hover: `hover:shadow-glow` - Glowing effect

## Mobile Responsiveness

- **Button Size**: Smaller on mobile (48px) vs desktop (56px)
- **Positioning**: Adjusted margins for mobile screens
- **Modal Height**: Reduced height on mobile (500px vs 600px)
- **Quick Actions**: Responsive button layout

## Usage

1. **Opening Chat**: Click the floating button in the bottom-right corner
2. **Sending Messages**: Type in the input field and press Enter or click Send
3. **Quick Actions**: Use the pre-defined question buttons for common topics
4. **Clearing Chat**: Click the refresh icon to start a new conversation
5. **Closing Chat**: Click the minimize button or click outside the modal

## Future Enhancements

### Potential Improvements
- **Real AI Integration**: Connect to OpenAI API or similar service
- **Conversation Memory**: Persist chat history across sessions
- **File Uploads**: Allow users to upload resumes or documents
- **Voice Input**: Speech-to-text functionality
- **Multi-language Support**: Internationalization
- **Analytics**: Track user interactions and popular questions

### Technical Enhancements
- **State Management**: Redux or Zustand for complex state
- **WebSocket**: Real-time communication
- **Caching**: Response caching for better performance
- **Testing**: Unit and integration tests
- **Error Handling**: Better error states and recovery

## Dependencies

The chatbot uses existing project dependencies:
- React 18+
- TypeScript
- Tailwind CSS
- Radix UI components
- Lucide React icons
- Class Variance Authority (CVA)

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Performance

- **Bundle Size**: Minimal impact on bundle size
- **Rendering**: Optimized with React.memo where appropriate
- **Animations**: CSS-based animations for smooth performance
- **Memory**: Efficient state management with minimal re-renders
