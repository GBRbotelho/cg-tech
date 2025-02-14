import { cn } from "@/lib/utils";
import { type HTMLAttributes, forwardRef } from "react";

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  level: 1 | 2;
}

export const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  (props, ref) => {
    switch (props.level) {
      case 1:
        return (
          <h1
            {...props}
            ref={ref}
            className={cn("text-xl font-semibold text-black", props.className)}
          />
        );
      case 2:
        return (
          <h1
            {...props}
            ref={ref}
            className={cn("text-lg font-medium text-title", props.className)}
          />
        );
    }
  }
);

export const Paragraph = forwardRef<
  HTMLParagraphElement,
  HTMLAttributes<HTMLParagraphElement>
>((props, ref) => (
  <p {...props} ref={ref} className={cn("font-light", props.className)} />
));
