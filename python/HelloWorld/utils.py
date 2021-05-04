def find_max(list):
  max_num = list[0]

  for item in list:
    if item > max_num:
      max_num = item

  return max_num
