def selection_sort(arr)
  n = arr.length - 1

  # 0.0001423015s
  # for i in 0..n
  #   min = i
  #   for j in (i+1)..n
  #     if arr[j] < arr[min]
  #       arr[j], arr[min] = arr[min], arr[j]
  #     end
  #   end
  # end
  # arr

  # 0.0001356495s
  n.times do |i|
    min = i
    for j in (i+1)..n
      if arr[j] < arr[min]
        min = j
      end
    end
    if min != i 
      arr[i], arr[min] = arr[min], arr[i]
    end
  end
  arr
end

if __FILE__ == $PROGRAM_NAME
  puts "Expecting: [-1, 2, 3, 5]"
  print "=> "
  print selection_sort([3, -1, 5, 2])

  puts

  # Don't forget to add your own!

  # BENCHMARK HERE, you can print the average runtime
  long_input = []

  100.times { long_input << rand }
  
  t0 = Time.now
  1000.times do
    selection_sort([3,2,1])
    selection_sort(long_input)
  end
  t1 = Time.now
  puts (t1 - t0)/2000
end

# Please add your pseudocode to this file
# And a written explanation of your solution
