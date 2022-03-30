
/**
 * with typescript we can additional props without specifying the ButtonProps using ...rest and same time include 
 * a children prop specifying its type to be strictly string using the Omit keyword.
 * the <generics-name> is unclear 
 */
type ButtonProps  = { 
    variant: 'primary' | 'secondary'
    children: string 
}& Omit<React.ComponentProps<'button'>, 'children'> 


export const CustomButton = ({ variant, children, ...rest }: ButtonProps) => {
    return (
        <button className={`class-with-${variant}`} {...rest}> {children} </button>
    )
}