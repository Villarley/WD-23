function countHours(year, holidays) {
    let extra = 0;
    holidays.map((holiday) => {
      const date = new Date(`${holiday}-${year}`.replace('/', '-'));
        const day = date.getDay();
        const hours = day>0 && day<6 ? extra = extra+1 : 'dont matter';
    });
    return extra;
  }
