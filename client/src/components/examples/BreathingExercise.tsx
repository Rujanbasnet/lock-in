import { BreathingExercise } from '../BreathingExercise';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

export default function BreathingExerciseExample() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Button onClick={() => setOpen(true)}>
        Open Breathing Exercise
      </Button>
      <BreathingExercise open={open} onOpenChange={setOpen} />
    </div>
  );
}
