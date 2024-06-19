import './App.css';
import File from './File';
import { files } from './files';

export type TFile = {
  name: string;
  children?: TFile[];
};

function App() {
  return (
    <>
      <h1>Tree structure example</h1>
      <p>
        By clicking the plus signs you will reveal the children of these
        elements:
      </p>
      <ul className="list">
        {files.map((file, index) => (
          <File file={file} depth={0} key={file.name + index} />
        ))}
      </ul>
    </>
  );
}

export default App;
