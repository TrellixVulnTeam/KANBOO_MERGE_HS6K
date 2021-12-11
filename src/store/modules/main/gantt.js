const gantt = {
  namespaced: true,
  state: {
    chart: {
      id: "",
      projName: "",
      projStart: "",
      projEnd: "",
      progress: "",
      tasks: [
        {
          memId: "zerochae",
          title: "task1",
          content: "",
          start: "03",
          end: "04",
          state: "",
          priority: "",
          color: "red",
          progress: "30",
        },
        {
          memId: "juwon",
          title: "task2",
          content: "",
          start: "04",
          end: "05",
          state: "",
          priority: "",
          color: "blue",
          progress: "70",
        },
        {
          memId: "daeg",
          title: "task3",
          content: "",
          start: "05",
          end: "06",
          state: "",
          priority: "",
          color: "cornflowerblue",
          progress: "50",
        },
        {
          memId: "th",
          title: "task4",
          content: "",
          start: "07",
          end: "08",
          state: "",
          priority: "",
          color: "green",
          progress: "10",
        },
        {
          memId: "chang",
          title: "task5",
          content: "",
          start: "10",
          end: "13",
          state: "",
          priority: "",
          color: "orange",
          progress: "100",
        },
      ],
    },
  },
  mutations: {
    add(state, payload) {
      state.chart.tasks.push(payload);
    },
  },
  actions: {},
};

export default gantt;
