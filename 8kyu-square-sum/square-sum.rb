def square_sum(numbers)
    numbers.map{|x| x*x}.sum
end

def squareSum(numbers)
    numbers.sum(&:abs2)
end

def squareSum(numbers)
    numbers.map {|n| n*n}.reduce(:+)
end