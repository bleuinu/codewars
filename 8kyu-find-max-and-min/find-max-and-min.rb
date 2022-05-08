def min(list)
    _min = list[0]
    list.each do |x|
        _min = x < _min ? x : _min
    end

    _min
end

def max(list)
    _max = list[0]
    list.each do |x|
        _max = x > _max ? x : _max
    end

    _max
end