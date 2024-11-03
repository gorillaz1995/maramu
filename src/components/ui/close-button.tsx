import type { ButtonProps as ChakraCloseButtonProps } from "@chakra-ui/react";
import { IconButton as ChakraIconButton } from "@chakra-ui/react";
import { forwardRef } from "react";
import { LuX } from "react-icons/lu";

export interface CloseButtonProps extends ChakraCloseButtonProps {
  /** Custom class name for styling */
  className?: string;
  /** Whether the button is disabled */
  isDisabled?: boolean;
}

export const CloseButton = forwardRef<HTMLButtonElement, CloseButtonProps>(
  function CloseButton(props, ref) {
    return (
      <ChakraIconButton variant="ghost" aria-label="Close" ref={ref} {...props}>
        {props.children ?? <LuX />}
      </ChakraIconButton>
    );
  }
);
