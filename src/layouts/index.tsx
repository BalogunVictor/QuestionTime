import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export const Layout = ({ children }: Props) => {
  return (
    <div>
      <div className="title">
        <h4 className="p-4 text-2xl font-bold sm:text-4xl">Question Time</h4>
      </div>
      {children}
    </div>
  );
};
