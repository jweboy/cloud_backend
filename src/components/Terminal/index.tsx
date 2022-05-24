import { useMount } from '@/hooks/useMount';
import * as React from 'react';
import * as xterm from 'xterm';
import 'xterm/css/xterm.css';
import { FitAddon } from 'xterm-addon-fit';
import { Button } from '@douyinfe/semi-ui';
import { io } from 'socket.io-client';
import { useLocation } from 'react-router-dom';

const term = new xterm.Terminal({
  fontFamily: `'Fira Mono', monospace`,
});

const fitAddon = new FitAddon();
term.loadAddon(fitAddon);

export interface LogTerminalProps {
  data?: PlainObject;
}

const initialLine = '\x1b[1;1;32m$ wellcom to web terminal!\x1b[0m';

const LogTerminal = React.memo<LogTerminalProps>((props) => {
  const terminalRef = React.useRef<RefObject<HTMLElement>>();
  const [isReadonly, setIsReadonly] = React.useState(false);
  const { data } = props;
  const socketRef = React.useRef(
    io('ws://localhost:5001', {
      reconnectionDelay: 1000 * 30,
    }),
  );

  const handleDeploy = () => {
    term.clear();
    term.writeln(initialLine);
    socketRef.current.emit('publishData', data);
    setIsReadonly(true);
  };

  React.useEffect(() => {
    const socket = socketRef.current;
    if (terminalRef.current != null) {
      term.open(terminalRef.current);
      term.writeln(initialLine);
      fitAddon.fit();
    }

    // console.log(terminalRef.current);

    socket.on('disconnect', () => {
      if (socket.disconnected) {
        setIsReadonly(false);
      }
    });

    // socket.on('connect', () => {
    //   console.log('connect');
    // });

    socket.on('writeLine', (msg: string) => {
      console.log(msg);
      // .replace(/\s*/g, '')
      const isValidData = msg !== null;
      if (isValidData) {
        term.writeln('$ ' + msg);
      }
      setIsReadonly(isValidData);
    });

    // socket.on('disconnect', () => {

    // })

    return () => {
      console.log('unmount');
      socket.off('writeLine');
      term.clear();
      // term.dispose();
    };
  }, []);

  return (
    <React.Fragment>
      <Button onClick={handleDeploy} disabled={isReadonly}>
        deploy
      </Button>
      <div
        id="terminal"
        ref={terminalRef}
        style={{ height: '100%', overflow: 'hidden' }}
      />
    </React.Fragment>
  );
});

export default LogTerminal;
