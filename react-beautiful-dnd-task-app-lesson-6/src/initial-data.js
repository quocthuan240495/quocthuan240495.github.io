const initialData = {
  tasks: {
    1: { id: '1', content: 'Trà sữa trân châu hoàng kim' },
    2: { id: '2', content: 'Trà sữa Konjac' },
    3: { id: '3', content: 'Mì Udon 2 loại thịt, trứng chần' },
    4: { id: '4', content: 'Mì Udon gà, sâm, táo đỏ siêu bổ dưỡng' },
  },
  columns: {
    1: {
      id: '1',
      title: 'Bạn có thể thích',
      taskIds: ['1', '2', '3', '4'],
    },
    2: {
      id: '2',
      title: 'Hanmade',
      taskIds: [],
    },
    3: {
      id: '3',
      title: 'Thực đơn',
      taskIds: [],
    },
  },
  // Facilitate reordering of the columns
  columnOrder: ['1', '2', '3'],
};

export default initialData;
