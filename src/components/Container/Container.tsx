import { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="max-w-[1280px] mx-4 md:mx-auto md:py-16">{children}</div>
  );
};

export default Container;
