import * as React from "react"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
  size?: "default" | "sm" | "lg" | "icon"
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", variant = "default", size = "default", ...props }, ref) => {
    const baseClasses = "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
    
    const variantClasses = {
      default: "hover:opacity-90 transition-opacity duration-200",
      destructive: "bg-red-600 text-white hover:bg-red-700",
      outline: "border border-gray-300 hover:opacity-80 transition-opacity duration-200",
      secondary: "hover:opacity-80 transition-opacity duration-200",
      ghost: "hover:opacity-70 transition-opacity duration-200",
      link: "underline-offset-4 hover:underline",
    }
    
    const sizeClasses = {
      default: "h-10 px-4 py-2",
      sm: "h-9 px-3",
      lg: "h-11 px-8",
      icon: "h-10 w-10",
    }
    
    const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`
    
    // Remove asChild from props to prevent it from being passed to DOM
    const { ...buttonProps } = props
    
    // Dynamic styles based on variant
    const getVariantStyles = () => {
      switch (variant) {
        case 'default':
          return {
            backgroundColor: 'var(--foreground)',
            color: 'var(--background)',
          }
        case 'outline':
          return {
            backgroundColor: 'var(--background)',
            color: 'var(--foreground)',
            borderColor: 'var(--foreground)',
          }
        case 'secondary':
          return {
            backgroundColor: 'var(--foreground)',
            color: 'var(--background)',
            opacity: 0.1,
          }
        case 'ghost':
          return {
            backgroundColor: 'transparent',
            color: 'var(--foreground)',
          }
        case 'link':
          return {
            backgroundColor: 'transparent',
            color: 'var(--foreground)',
          }
        default:
          return {}
      }
    }
    
    return (
      <button
        className={classes}
        style={getVariantStyles()}
        ref={ref}
        {...buttonProps}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
