def find_subset(numsArray): 
  subsets = []

  subsets.append([])
  for num in numsArray:
    n = len(subsets)
    print("num : ", num)
    print("subsets : ", subsets)    
    
    for i in range(n):
      print("--------")
      set = list(subsets[i])
      print("set", set)

      set.append(num)
      print("updated set", set)

      subsets.append(set)
      print("updated subsets", subsets)
      print("--------------------------------")

  return subsets


def main():
  print("subset : ", find_subset([1,2,4]))

main()