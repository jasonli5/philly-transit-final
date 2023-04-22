import styled from "@emotion/styled";
import { ReactNode } from "react";

const Style = styled.div`
  .button {
    background-color: var(--blue-color);
    border-radius: 2rem;
    margin-top: 0.2rem;
    padding: 1rem 3rem;
    text-decoration: none;
    color: white;
    text-align: center;
    font-size: 1rem;
    transition: 0.3s;
  }

  .button:hover {
    padding: 1rem 4rem;
    background-color: #f7510f;
  }

  .button:active {
    background-color: var(--dark-text-color);
  }
`;

interface ButtonProps {
  children: ReactNode;
  href: string;
}

const Button: React.FC<ButtonProps> = ({ children, href }) => {
  return (
    <Style>
      <a role="button" className="button" href={href}>
        {children}
      </a>
    </Style>
  );
};

export default Button;
