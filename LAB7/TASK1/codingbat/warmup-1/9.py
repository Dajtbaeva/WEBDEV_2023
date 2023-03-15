def not_string(str):
  return str if str[:3] == "not" and len(str) >= 3 else "not " + str
