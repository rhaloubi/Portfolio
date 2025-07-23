declare module 'react-spotify-widgets' {
  interface PlayWidgetProps {
    width?: number;
    height?: number;
    uri: string;
    lightTheme?: boolean;
    title: string;
  }

  const PlayWidget: React.FC<PlayWidgetProps>;
  export default PlayWidget;
}