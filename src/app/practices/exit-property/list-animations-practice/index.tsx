import { X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import type React from 'react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ModeButton, TaskButton } from './partials/list-controls';

type TodoItem = {
  id: number;
  text: string;
  color: string;
};

type ListAnimationDemoProps = {
  animationStyle: 'slide' | 'scale' | 'fade';
};

export const ListAnimationDemo: React.FC<ListAnimationDemoProps> = ({
  animationStyle,
}) => {
  const [todos, setTodos] = useState<TodoItem[]>([
    {
      id: 1,
      text: 'Learn Motion exit animations',
      color: 'from-purple-500 to-pink-500',
    },
    {
      id: 2,
      text: 'Practice with AnimatePresence',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      id: 3,
      text: 'Build amazing UI transitions',
      color: 'from-green-500 to-emerald-500',
    },
  ]);
  const [mode, setMode] = useState<'sync' | 'popLayout'>('sync');

  const colors = [
    'from-purple-500 to-pink-500',
    'from-blue-500 to-cyan-500',
    'from-green-500 to-emerald-500',
    'from-orange-500 to-red-500',
    'from-indigo-500 to-purple-500',
    'from-yellow-500 to-amber-500',
  ];

  const addTodo = () => {
    const newId = Math.max(...todos.map((t) => t.id), 0) + 1;
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    const taskNames = [
      'Master layout animations',
      'Create smooth transitions',
      'Explore spring physics',
      'Build interactive components',
      'Study animation patterns',
      'Polish user interfaces',
    ];
    const randomTask = taskNames[Math.floor(Math.random() * taskNames.length)];

    setTodos([...todos, { id: newId, text: randomTask, color: randomColor }]);
  };

  const removeTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const clearAll = () => {
    setTodos([]);
  };

  const getExitAnimation = () => {
    switch (animationStyle) {
      case 'slide':
        return { x: -300, opacity: 0 };
      case 'scale':
        return { scale: 0, opacity: 0 };
      case 'fade':
        return { opacity: 0 };
      default:
        return { opacity: 0 };
    }
  };

  const getInitialAnimation = () => {
    switch (animationStyle) {
      case 'slide':
        return { x: 300, opacity: 0 };
      case 'scale':
        return { scale: 0, opacity: 0 };
      case 'fade':
        return { opacity: 0 };
      default:
        return { opacity: 0 };
    }
  };

  return (
    <div className='space-y-lg'>
      <div className='flex flex-wrap gap-sm'>
        <TaskButton onClick={addTodo} icon='add' label='Add Task' />
        <TaskButton
          onClick={clearAll}
          icon='clear'
          label='Clear All'
          disabled={todos.length === 0}
        />
        <ModeButton
          mode='sync'
          currentMode={mode}
          onClick={() => setMode('sync')}
        />
        <ModeButton
          mode='popLayout'
          currentMode={mode}
          onClick={() => setMode('popLayout')}
        />
      </div>

      <div className='relative min-h-400 w-full rounded-xl bg-neutral-900/50 p-xl pb-80'>
        <div className='mx-auto max-w-600 space-y-md'>
          <AnimatePresence mode={mode}>
            {todos.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className='flex h-200 items-center justify-center'
              >
                <p className='text-neutral-400 text-sm-regular'>
                  No tasks yet. Click "Add Task" to start!
                </p>
              </motion.div>
            )}
            {todos.map((todo) => (
              <motion.div
                key={todo.id}
                layout
                initial={getInitialAnimation()}
                animate={{ x: 0, scale: 1, opacity: 1 }}
                exit={getExitAnimation()}
                transition={{
                  duration: 0.3,
                  type: 'spring',
                  stiffness: 300,
                  damping: 25,
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={cn(
                  'group relative flex items-center justify-between rounded-xl bg-gradient-to-r p-lg shadow-lg transition-shadow hover:shadow-xl',
                  todo.color
                )}
              >
                <div className='flex items-center gap-md'>
                  <div className='flex size-36 items-center justify-center rounded-lg bg-white/20'>
                    <span className='text-md-bold text-white'>{todo.id}</span>
                  </div>
                  <span className='text-md-semibold text-white'>
                    {todo.text}
                  </span>
                </div>
                <Button
                  onClick={() => removeTodo(todo.id)}
                  variant='ghost'
                  size='icon'
                  className='size-32 cursor-pointer text-white hover:bg-white/20'
                >
                  <X className='size-16' />
                </Button>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div className='absolute right-0 bottom-0 left-0 p-xl text-center'>
          <div className='inline-flex items-center gap-md rounded-full bg-neutral-900/50 px-lg py-sm'>
            <span className='text-neutral-300 text-sm-regular'>
              Tasks: <strong>{todos.length}</strong>
            </span>
            <span className='text-purple-300 text-xs-regular'>
              ({mode} mode)
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
