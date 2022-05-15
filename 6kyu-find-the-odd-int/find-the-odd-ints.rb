def find_it(seq)
    h = Hash.new(0)

    seq.map {|x| h[x] += 1}
    h.entries.each do |k,v|
        return k if v%2 == 1
    end

    return 0
end

=begin
def find_it(seq)
    seq.detect { |n| seq.count(n).odd? }
end 
=end