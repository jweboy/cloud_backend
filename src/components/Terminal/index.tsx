import { useMount } from '@/hooks/useMount';
import React from 'react';
import { Terminal } from 'xterm';
import 'xterm/css/xterm.css';
import { FitAddon } from 'xterm-addon-fit';
import { Button } from '@douyinfe/semi-ui';
import { AttachAddon } from 'xterm-addon-attach';
import { io } from 'socket.io-client';

const socket = io('ws://localhost:5001');

const term = new Terminal({
  fontFamily: `'Fira Mono', monospace`,
});

const fitAddon = new FitAddon();
term.loadAddon(fitAddon);

export interface LogTerminalProps {
  data?: string[];
}

const initialLine = '\x1b[1;1;32m$ wellcom to web terminal!\x1b[0m';

const LogTerminal = React.memo<LogTerminalProps>(() => {
  const terminalRef = React.useRef<RefObject<HTMLElement>>();
  const [isReadonly, setIsReadonly] = React.useState(true);

  const handleDeploy = () => {
    term.clear();
    term.writeln(initialLine);
    socket.emit('deploy project', { gitRepo: 'https://github.com/' });
  };

  useMount(() => {
    if (terminalRef.current != null) {
      term.open(terminalRef.current);
      term.writeln(initialLine);
      fitAddon.fit();
    }

    socket.on('disconnect', () => {
      setIsReadonly(socket.disconnected);
    });

    socket.on('connect', () => {
      setIsReadonly(!socket.connected);
    });

    socket.on('send clone message', (msg: string) => {
      // .replace(/\s*/g, '')
      const isValidData = msg !== null;
      if (isValidData) {
        term.writeln('$ ' + msg.replace(/\s*/g, ''));
      }
      setIsReadonly(isValidData);
    });

    return () => {
      term.dispose();
    };
  });

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
