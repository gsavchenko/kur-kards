
import { Channel } from 'phoenix';
import { useState, useContext, useEffect } from 'react';
import { PhoenixSocketContext } from './socket.context';

const useChannel = (channelName: string) => {
  const [channel, setChannel] = useState<undefined | Channel>(undefined);
  const { socket } = useContext(PhoenixSocketContext);

  useEffect(() => {
    const phoenixChannel = socket?.channel(channelName);

    phoenixChannel?.join()
    .receive('ok', resp => {
      setChannel(phoenixChannel);
      console.log('Joined successfully', resp);
    })
    .receive('error', resp => {
      console.log('Unable to join', resp);
    });

    // leave the channel when the component unmounts
    return () => {
      phoenixChannel?.leave();
    };
  }, []);

  // only connect to the channel once on component mount
  // by passing the empty array as a second arg to useEffect  
  return [channel];
};

export default useChannel;
