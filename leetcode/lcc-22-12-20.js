function canVisitAllRooms(rooms) {
  const n = rooms.length;

  const visited = new Set();
  visited.add(0);

  return helper(0);

  function helper(currRoom) {
    if (visited.size() == n) return true;

    const keys = rooms[currRoom];

    //rooms we can enter;
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];

      if (visited.has(key)) continue;

      visited.add(key);
      if (helper(key)) return true;
    }

    return false;
  }
}

