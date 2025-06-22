
import { TimelineDemo } from '@/components/ui/timeline';
import Navigation from '@/components/Navigation';

const TimelinePage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-20">
        <TimelineDemo />
      </div>
    </div>
  );
};

export default TimelinePage;
