import { useMemo, useState } from 'react';
import { TFile } from './App';

const File = ({ file, depth }: { file: TFile; depth: number }) => {
  //State
  const [isOpen, setIsOpen] = useState<boolean>(false);

  //Memo
  const sign = useMemo(() => {
    return isOpen ? '- ' : '+ ';
  }, [isOpen]);

  return (
    <>
      <li
        style={{
          cursor: file.children ? 'pointer' : 'default',
          marginLeft: `${depth * 10}px`,
        }}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {file.children && sign}
        {file.name}
      </li>
      {file.children &&
        isOpen &&
        file.children.map((child, index) => (
          <File file={child} depth={depth + 1} key={child.name + index} />
        ))}
    </>
  );
};

export default File;
